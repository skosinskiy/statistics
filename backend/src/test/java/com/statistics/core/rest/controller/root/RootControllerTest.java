package com.statistics.core.rest.controller.root;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

@SpringBootTest
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
public class RootControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void redirectToAdmin() throws Exception {
        String expectedForwardedUrl = "/index.html";
        String forwardedUrl = mockMvc.perform(get("/"))
                .andReturn().getResponse().getForwardedUrl();

        assertEquals(expectedForwardedUrl, forwardedUrl);
    }

    @Test
    public void testRedirectToAdmin() throws Exception {
        String expectedForwardedUrl = "/index.html";
        String forwardedUrl = mockMvc.perform(get("/football"))
                .andReturn().getResponse().getForwardedUrl();

        assertEquals(expectedForwardedUrl, forwardedUrl);
    }
}