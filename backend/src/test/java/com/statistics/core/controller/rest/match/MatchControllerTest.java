package com.statistics.core.controller.rest.match;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.statistics.core.controller.dto.response.match.MatchResponseDetailed;
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

import static com.statistics.core.TestUtils.getAuthHeader;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@SpringBootTest
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@WithMockUser(username = "user1@gmail.com")
public class MatchControllerTest {

  @Autowired
  private MockMvc mockMvc;

  @Autowired
  private ObjectMapper objectMapper;

  @Test
  public void findById() throws Exception {
    long matchId = 1;
    String expectedHomeTeamTitle = "Brighton";
    Integer expectedHomeScore = 1;
    String expectedAwayTeamTitle = "Chelsea";
    Integer expectedAwayScore = 3;
    int expectedEventListSize = 5;
    int expectedStatisticListSize = 32;

    MockHttpServletResponse response = mockMvc.perform(get("/api/matches/" + matchId)
        .header(SecurityService.AUTHORIZATION_HEADER, getAuthHeader(mockMvc, objectMapper))
    ).andReturn().getResponse();

    MatchResponseDetailed matchResponseDetailed =
        objectMapper.readValue(response.getContentAsString(), MatchResponseDetailed.class);

    assertEquals(HttpStatus.OK.value(), response.getStatus());
    assertNotNull(matchResponseDetailed.getDate());
    assertEquals(expectedHomeTeamTitle, matchResponseDetailed.getHomeTeam().getTitle());
    assertEquals(expectedHomeScore, matchResponseDetailed.getHomeScore());
    assertEquals(expectedAwayTeamTitle, matchResponseDetailed.getAwayTeam().getTitle());
    assertEquals(expectedAwayScore, matchResponseDetailed.getAwayScore());
    assertEquals(expectedEventListSize, matchResponseDetailed.getEventList().size());
    assertEquals(expectedStatisticListSize, matchResponseDetailed.getStatisticList().size());
  }
}