package com.training.service;


public interface AiService {

    String generateText(String prompt,String conversationId);
    String analyseSentiment(String text);
    String generateBase64Image(String prompt);
}
