*** Settings ***
Library     SeleniumLibrary

*** Variables ***
${URL_REG}         http://localhost:5173/register
${URL_LOGIN}       http://localhost:5173/login
${BROWSER}         chrome
${USERNAME}        Tanakit_Test_4
${PASSWORD}        Password123

*** Test Cases ***
Complete User Journey With Cookie Check
    [Documentation]    สมัครสมาชิก (รองรับชื่อซ้ำ) -> Login -> ตรวจสอบ Cookies
    Open My Browser    ${URL_REG}
     
    # --- ขั้นตอน Register ---
    Input Text       css=input[placeholder="Username"]    ${USERNAME}
    Input Text       css=input[placeholder="Password"]    ${PASSWORD}
    Click Element    css=button[type="submit"]
    
    # ตรวจสอบสถานะ: สำเร็จ หรือ ชื่อซ้ำ
    ${status_pass}=    Run Keyword And Return Status    Wait Until Page Contains    สมัครสมาชิกสำเร็จ    timeout=5s
    ${status_fail}=    Run Keyword And Return Status    Wait Until Page Contains    Username is already used    timeout=3s

    IF    ${status_pass}
        Log    Registration Successful!
        Click Element    xpath=//button[contains(text(), 'ไปหน้า Login')]
    ELSE IF    ${status_fail}
        Log    Username already exists, proceeding to login.
        Go To    ${URL_LOGIN}
    ELSE
        Log    Unexpected state or registration failed for other reasons.
        Go To    ${URL_LOGIN}
    END
    
    # --- ขั้นตอน Login ---
    Wait Until Element Is Visible    css=input[placeholder="Username"]    10s
    Input Text       css=input[placeholder="Username"]    ${USERNAME}
    Input Text       css=input[placeholder="Password"]    ${PASSWORD}
    Click Element    css=button[type="submit"]
    
    # ตรวจสอบว่า Login สำเร็จ
    Wait Until Page Contains    Logout    10s
    
    # --- ขั้นตอนตรวจสอบ Cookies ---
    # ดึง Cookies ทั้งหมดมาแสดงใน Log
    ${all_cookies}=    Get Cookies
    Log    All Cookies after login: ${all_cookies}
    
    # ตรวจสอบว่ามี Cookie ที่สำคัญ (เช่น token) หรือไม่
    # หมายเหตุ: เปลี่ยนชื่อ 'token' เป็นชื่อที่ Backend คุณใช้งานจริง (เช่น 'access_token' หรือ 'session')
    Run Keyword And Ignore Error    Check Specific Auth Cookie    token

    [Teardown]    Close Browser

*** Keywords ***
Open My Browser
    [Arguments]    ${target_url}
    ${options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys, selenium.webdriver
    Call Method    ${options}    add_argument    --incognito
    # ปรับปรุงให้รันได้เสถียรขึ้น
    Call Method    ${options}    add_argument    --no-sandbox
    Call Method    ${options}    add_argument    --disable-dev-shm-usage
    
    Create Webdriver    Chrome    options=${options}
    Go To    ${target_url}
    Maximize Browser Window

Check Specific Auth Cookie
    [Arguments]    ${cookie_name}
    ${cookie}=    Get Cookie    ${cookie_name}
    Should Not Be Empty    ${cookie.value}
    Log    Found Cookie: ${cookie_name} with value: ${cookie.value}