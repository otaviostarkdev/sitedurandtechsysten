@echo off
title Deploy Durand Tech - V4.1 Linda Blindada
color 0B
echo ===============================================
echo  DURAND TECH SYSTEM - DEPLOY AUTOMATICO
echo  Landing Linda Blindada V4.1 - Sem GitHub
echo  Repo: otaviostarkdev/sitedurandtechsysten
echo ===============================================
echo.

cd /d D:\durandtechsysten.com.br\public
if %errorlevel% neq 0 (
  echo [ERRO] Pasta D:\durandtechsysten.com.br\public nao encontrada!
  pause
  exit /b
)

echo [1/5] Verificando arquivos...
if not exist durandcleaner.html (
  echo [ERRO] durandcleaner.html nao encontrado! Copie o arquivo pra esta pasta.
  pause
  exit /b
)
if not exist portfolio.html echo [AVISO] portfolio.html nao encontrado
if not exist index.html echo [AVISO] index.html nao encontrado
if not exist pix_qr_durand.png echo [AVISO] pix_qr_durand.png nao encontrado

echo [2/5] Configurando Git remote...
git remote -v | findstr "sitedurandtechsysten" >nul
if %errorlevel% neq 0 (
  git remote add origin https://github.com/otaviostarkdev/sitedurandtechsysten.git
  echo Remote adicionado
) else (
  echo Remote ja configurado
)

echo [3/5] Adicionando arquivos...
git add durandcleaner.html portfolio.html index.html pix_qr_durand.png

echo [4/5] Commit...
set MSG=Add Durand Cleaner V4.1 linda blindada - sem link GitHub publico - senha DURAND2026 - %date% %time%
git commit -m "%MSG%"

echo [5/5] Enviando pro GitHub...
git push -u origin main
if %errorlevel% neq 0 (
  echo Tentando push para master...
  git push -u origin master
)

echo.
echo ===============================================
echo  DEPLOY CONCLUIDO! 
echo  Seu site vai atualizar em 1-2 min em:
echo  https://durandtechsysten.com.br/durandcleaner.html
echo  https://durandtechsysten.com.br/portfolio.html
echo ===============================================
echo  Senha que voce manda no WhatsApp: DURAND2026
echo  Link magico: https://durandtechsysten.com.br/durandcleaner.html?senha=DURAND2026
echo ===============================================
pause
