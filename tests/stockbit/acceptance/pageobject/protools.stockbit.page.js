/* global $$ */
require('dotenv').config();
const { expect } = require("@playwright/test")

//launch url
const btnBukaRekening = ('//*[@id="__next"]/div/div[2]/div[1]/div[1]/a');
const laporanKeuangan = ('//*[@id="financials"]/div[1]/h3');
const rasioFund = ('//*[@id="keystats"]/div[1]/h3');
const compareData = ('//*[@id="fundachart"]/div[1]/h3');
const fiturCharting = ('//*[@id="chartbit"]/div[1]/h3');
const cariSaham = ('//*[@id="screener"]/div[1]/h3');
const notifReal = ('//*[@id="price-alert"]/div[1]/h3');
const sahamBulan = ('//*[@id="seasonality"]/div[1]/h3');
const rangkuman = ('//*[@id="earnings"]/div[1]/h3');
const dataEmiten = ('//*[@id="comparison"]/div[1]/h3');

const Protools = function protools() {
  this.validateRekening = async () => {
    const bRekening = await page.locator(btnBukaRekening);
    await expect(bRekening).toBeVisible();
    await expect.soft(bRekening).toHaveText('Buka Rekening Anda');
  };

  this.lapKeuangan = async () => {
    const lapKeuangan = await page.locator(laporanKeuangan);
    await expect(lapKeuangan).toBeVisible();
    await expect.soft(lapKeuangan).toHaveText('Pelajari Data Laporan Keuangan');
  };

  this.rasioFundamental = async () => {
    const rasioFunda = await page.locator(rasioFund);
    await expect(rasioFunda).toBeVisible();
    await expect.soft(rasioFunda).toHaveText('Rasio-rasio Fundamental yang Lengkap');
  };

  this.compareData = async () => {
    const comData = await page.locator(compareData);
    await expect(comData).toBeVisible();
    await expect.soft(comData).toHaveText('Bandingkan Data Emiten secara Visual');
  };

  this.fiturChart = async () => {
    const fCharting = await page.locator(fiturCharting);
    await expect(fCharting).toBeVisible();
    await expect.soft(fCharting).toHaveText('Fitur Charting Professional');
  };

  this.cariSaham = async () => {
    const cSaham = await page.locator(cariSaham);
    await expect(cSaham).toBeVisible();
    await expect.soft(cSaham).toHaveText('Cari Saham sesuai Kriteria Kamu');
  };

  this.notifReal = async () => {
    const nRealtime = await page.locator(notifReal);
    await expect(nRealtime).toBeVisible();
    await expect.soft(nRealtime).toHaveText('Notifikasi Real-Time Saat Harga Kamu Tercapai');
  };

  this.sahamBulan = async () => {
    const sBulan = await page.locator(sahamBulan);
    await expect(sBulan).toBeVisible();
    await expect.soft(sBulan).toHaveText('Lihat Pergerakan Saham Pada Bulan-bulan Tertentu');
  };

  this.rangkuman = async () => {
    const rangkumanBulan = await page.locator(rangkuman);
    await expect(rangkumanBulan).toBeVisible();
    await expect.soft(rangkumanBulan).toHaveText('Rangkuman Laba Bersih Perusahaan Setiap Periode');
  };

  this.dataEmiten = async () => {
    const dataEmitens = await page.locator(dataEmiten);
    await expect(dataEmitens).toBeVisible();
    await expect.soft(dataEmitens).toHaveText('Bandingkan Data Emiten Satu dengan Lainnya');
  };

};

module.exports = new Protools();
