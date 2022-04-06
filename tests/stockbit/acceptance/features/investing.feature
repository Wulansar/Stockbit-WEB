Feature: User Open Menu Investing in Stockbit

  Scenario: User Open Section Homepage
    Given User on Stockbit.com homepage
    When User click "Investing" category on Stockbit homepage
    Then User success validate to "Investing" menu in Investing Menu
