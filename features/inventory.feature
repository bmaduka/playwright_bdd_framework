Feature: Inventory Page

  Background:

    Given user logs in successfully

  @smoke
  Scenario: Validate inventory page

    Then inventory page should load

    And product inventory count is correct


  Scenario: Validate inventory page

    Given user logs in successfully

    Then inventory page should load

    And product inventory count is correct

    And api product count should match ui

  @visual
  Scenario: Validate inventory page

    Given user logs in successfully

    Then inventory page should load

    And inventory visual regression passes

  @visual
  Scenario: Validate product image

    Given user logs in successfully

    Then product image visual regression passes
