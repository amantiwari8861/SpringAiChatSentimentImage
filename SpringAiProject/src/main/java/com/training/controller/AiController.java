package com.training.controller;

import com.training.model.Input;
import com.training.model.Output;
import com.training.model.Review;
import com.training.service.AiService;
import jakarta.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequestMapping("/api/v1")
public class AiController {

    List<Review> reviews=new ArrayList<>();
    private final AiService aiService;
    AiController(AiService aiService)
    {
        this.aiService=aiService;
    }

    // @PostMapping("/chat")
    // public Output chat(@RequestBody @Valid Input input) {
    //     return new Output(aiService.generateText(input.prompt()));
    // }
    @PostMapping("/chat")
    ResponseEntity<Output> chat(@RequestBody @Valid Input input,
                                @CookieValue(name = "X-CONV-ID", required = false) String convId) {
        String conversationId = convId == null ? UUID.randomUUID().toString() : convId;
        String response = aiService.generateText(input.prompt(),conversationId);
        ResponseCookie cookie = ResponseCookie.from("X-CONV-ID", conversationId)
                .path("/")
                .maxAge(3600)
                .build();
        Output output = new Output(response);
        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString()).body(output);
    }
    @PostMapping("/review")
    public Review review(@RequestBody @Valid Input input) {
        Review review=new Review();
        review.setContent(input.prompt());
        review.setSentiment(aiService.analyseSentiment(input.prompt()));
        review.setCreatedAt(LocalDateTime.now());
        reviews.add(review);
        return review;
    }
    @GetMapping("/review")
    public List<Review> review() {
        return reviews;
    }

    @GetMapping("/generate-image")
    public Map<String, String> generateImage(@RequestParam String prompt) {
        System.out.println(prompt);
        String base64Img = aiService.generateBase64Image(prompt);
        System.out.println(base64Img);
        Map<String, String> response = new HashMap<>();
        response.put("prompt", prompt);
        response.put("imageBase64", base64Img); // can be null
        return response;
    }
}