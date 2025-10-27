package com.training.controller;

import com.training.model.Input;
import com.training.model.Output;
import com.training.model.Review;
import com.training.service.AiService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class AiController {

    List<Review> reviews=new ArrayList<>();
    private final AiService aiService;
    AiController(AiService aiService)
    {
        this.aiService=aiService;
    }

    @PostMapping("/chat")
    public Output chat(@RequestBody @Valid Input input) {
        return new Output(aiService.generateText(input.prompt()));
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
