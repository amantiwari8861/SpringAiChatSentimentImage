package com.training.service.impl;

import com.training.service.AiService;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.client.advisor.SimpleLoggerAdvisor;
import org.springframework.ai.chat.messages.SystemMessage;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.image.ImageModel;
import org.springframework.ai.image.ImagePrompt;
import org.springframework.ai.image.ImageResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.ai.chat.client.advisor.MessageChatMemoryAdvisor;
import org.springframework.ai.chat.memory.ChatMemory;

import java.util.List;

@Service
public class AiServiceImpl implements AiService {

    private final ChatClient chatClient;
    private final Resource promptResource;
    private final ImageModel imageModel;

    AiServiceImpl(ChatClient.Builder builder, @Value("classpath:/prompts/sentiment-analysis.st")
                  Resource promptResource,
                  ImageModel imageModel,
                  ChatMemory chatMemory
                  ) {
        this.chatClient = builder
                .defaultAdvisors(
                    MessageChatMemoryAdvisor.builder(chatMemory).build(),
                new SimpleLoggerAdvisor())
                .build();
        this.promptResource = promptResource;
        this.imageModel = imageModel;
    }

    @Override
    public String generateText(String userPrompt,String conversationId) {
        return chatClient.prompt()
                .user(userPrompt)
                .advisors(a -> a.param(ChatMemory.CONVERSATION_ID, conversationId))
                .call().content();
        // return chatClient.prompt(userPrompt).call().content();
    }

    @Override
    public String analyseSentiment(String text) {
        //String systemPrompt = "You are a friendly, helpful assistant. You always respond professionally.";
        String systemPrompt = "You are a helpful assistant. You have to analyse the text and give the result in One word only which is from Positive,Negative or Neutral.";
        SystemMessage systemMessage = new SystemMessage(systemPrompt);
        UserMessage userMessage = new UserMessage(text);

        Prompt prompt = new Prompt(List.of(systemMessage, userMessage));
        return chatClient.prompt(prompt).call().content();
    }
    public String generateBase64Image(String prompt) {
        ImagePrompt imagePrompt = new ImagePrompt(prompt);
        ImageResponse response = imageModel.call(imagePrompt);
        // Assuming the response contains a Base64-encoded image
        return response.getResult().getOutput().getB64Json();
    }
}