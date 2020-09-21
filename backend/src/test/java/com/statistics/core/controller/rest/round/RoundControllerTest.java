package com.statistics.core.controller.rest.round;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.statistics.core.controller.dto.response.round.RoundResponse;
import com.statistics.core.security.SecurityService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Objects;

import static com.statistics.core.TestUtils.getAuthHeader;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@SpringBootTest
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@WithMockUser(username = "user1@gmail.com")
public class RoundControllerTest {

  @Autowired
  private MockMvc mockMvc;

  @Autowired
  private ObjectMapper objectMapper;

  @Test
  public void findAllRounds() throws Exception {
    int expectedRoundListSize = 2;
    int expectedMatchListSize = 10;
    long tournamentId = 1;
    short expectedRound = 1;
    Long expectedRoundId = 1L;

    MockHttpServletResponse response = mockMvc.perform(get("/api/rounds/tournament/" + tournamentId)
        .header(SecurityService.AUTHORIZATION_HEADER, getAuthHeader(mockMvc, objectMapper))
    ).andReturn().getResponse();

    Map<String, Object> pageableResponse =
        objectMapper.readValue(response.getContentAsString(), new TypeReference<Map<String, Object>>() {
        });

    List<RoundResponse> roundResponseList =
        objectMapper.convertValue(pageableResponse.get("content"), new TypeReference<List<RoundResponse>>() {
        });

    RoundResponse roundResponse = roundResponseList.stream()
        .filter(round -> round.getNumber().equals(expectedRound))
        .findFirst()
        .orElseThrow(NoSuchElementException::new);

    assertEquals(HttpStatus.OK.value(), response.getStatus());
    assertEquals(expectedRoundId, roundResponse.getId());
    assertEquals(expectedRoundListSize, roundResponseList.size());
    assertEquals(expectedMatchListSize, roundResponse.getMatchList().size());
    assertTrue(roundResponse.getMatchList().stream().allMatch(match ->
        allNotNull(match.getId(), match.getState(), match.getHomeTeam(), match.getAwayTeam())));
  }

  private boolean allNotNull(Object... objects) {
    return Arrays.stream(objects).map(Objects::nonNull).reduce((b1, b2) -> b1 && b2).orElse(true);
  }

}