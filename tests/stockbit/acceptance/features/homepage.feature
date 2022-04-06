Feature: User Open Menu in Stockbit

  Scenario: User Open Section Homepage
    Given User on Stockbit.com homepage
    When User looking for content
    Then User get all the content

  Scenario Outline: User Open Section From Homepage
    Given User on Stockbit.com homepage
    When User click "<section>" category on Stockbit homepage
    Then User success to "<section>" menu on Stockbit Menu

    Examples:
      | section   |
      | Investing |
      | Pro Tools |
      | Academy   |
      | About Us  |
      | Blog      |
      | Help      |
      | Log In    |
      | Sign Up   |
