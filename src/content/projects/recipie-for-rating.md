---
title: 'Recipe for Rating: Predict Food Ratings using ML'
description: Recipe for Rating is a machine learning project designed to predict food ratings using numeric, categorical, and text features. The project achieved top Kaggle competition performance, ranking 118th with a score of 0.78288.
publishDate: 'Sep 15 2024'
isFeatured: True
---

**Project Overview:**
Recipe for Rating leverages machine learning models to predict food ratings from user-submitted reviews and associated numeric and categorical data. By preprocessing text, numeric, and categorical features, the project trains multiple models to classify ratings effectively, including advanced two-stage classification strategies to handle dataset bias.

**Project source code**: [https://github.com/Risdorn/Recipe-for-Rating](https://github.com/Risdorn/Recipe-for-Rating)

## Objectives

1. Predict food ratings accurately using machine learning techniques.
2. Preprocess numeric, categorical, and text features for optimal model performance.
3. Compare multiple models and identify the best approach for imbalanced datasets.

## Features

1. **Data Preprocessing**:

    - Numeric features scaled using StandardScaler.
    - Categorical features encoded with OneHotEncoder.
    - Text reviews transformed with TfidfVectorizer.

2. **Model Training**:

    - Logistic Regression, Random Forest, SVM, KNN, AdaBoost, Balanced Bagging, and MLP classifiers.
    - Pipelines for each model combining preprocessing and training steps.

3. **Two-Stage Classification**:

    - Stage 1: Distinguish rating 5 from all others.
    - Stage 2: Classify remaining ratings (0–4).

4. **Evaluation & Comparison**:

    - Accuracy, precision, recall, and F1-score metrics.
    - Randomized Search for hyperparameter tuning of selected models.

## Technology Stack

- **Language**: Python
- **Libraries**: Scikit-learn, PyCaret, Pandas, NumPy, TfidfVectorizer
- **Tools**: Jupyter Notebook for experimentation, training, and visualization

## Outcome

Recipe for Rating successfully predicted food ratings from a highly imbalanced dataset, achieving top Kaggle performance (score 0.78288). The two-stage classification approach improved prediction accuracy for minority classes, and comprehensive evaluation across multiple models provided insights into optimal preprocessing and model selection strategies.
