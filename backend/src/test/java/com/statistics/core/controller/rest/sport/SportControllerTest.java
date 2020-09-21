package com.statistics.core.controller.rest.sport;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.statistics.core.TestUtils;
import com.statistics.core.controller.dto.response.sport.SportResponse;
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

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@SpringBootTest
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@WithMockUser(username = "user1@gmail.com")
public class SportControllerTest {

  @Autowired
  private MockMvc mockMvc;

  @Autowired
  private ObjectMapper objectMapper;

  @Test
  public void findAll() throws Exception {
    int expectedSize = 2;
    String footballSport = "Football";
    String basketballSport = "Basketball";

    MockHttpServletResponse response = mockMvc.perform(get("/api/sports")
        .header(SecurityService.AUTHORIZATION_HEADER, TestUtils.getAuthHeader(mockMvc, objectMapper))
    ).andReturn().getResponse();

    List<SportResponse> sportResponseList =
        objectMapper.readValue(response.getContentAsString(), new TypeReference<List<SportResponse>>() {
        });

    assertEquals(HttpStatus.OK.value(), response.getStatus());
    assertEquals(expectedSize, sportResponseList.size());
    assertTrue(sportResponseList.stream().anyMatch(sport -> sport.getTitle().equals(footballSport)));
    assertTrue(sportResponseList.stream().anyMatch(sport -> sport.getTitle().equals(basketballSport)));
  }
}