package com.training.model;

import jakarta.validation.constraints.NotBlank;

public record Input(@NotBlank String prompt) {}
