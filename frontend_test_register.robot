*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}            http://localhost:5173/register
${BROWSER}        chrome

${INPUT_USER}     css=input[placeholder="Username"]
${INPUT_PASS}     css=input[placeholder="Password"]
${SUBMIT_BTN}     css=button[type="submit"]

*** Test Cases ***
User Should Be Able To Register Successfully
    ${options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys, selenium.webdriver
    Call Method    ${options}    add_argument    --incognito

    Create Webdriver    Chrome    options=${options}

    # เปิดหน้าแรกก่อน
    Go To    http://localhost:5173
    Maximize Browser Window
    Sleep    2s

    # แล้วค่อยไปหน้า register
    Go To    http://localhost:5173/register

    Wait Until Element Is Visible    ${INPUT_USER}    10s
    Input Text    ${INPUT_USER}    Tanakit_Test
    Input Text    ${INPUT_PASS}     Password123
    Click Element    ${SUBMIT_BTN}

    Sleep    3s
    Close Browser


*** Keywords ***
Open Browser To Register Page
    Open Browser    ${URL}    ${BROWSER}
    Maximize Browser Window
    Wait Until Element Is Visible    ${INPUT_USER}    10s
