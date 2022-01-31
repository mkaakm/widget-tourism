<template>
<div class="step1">
<div class="central-section">
  <div class="grid">
    <div class="left-side">
      <h3 class="heading">Подорож</h3>
      <div class="block-small">
        <p class="text">Місце подорожі <span class="text-faded">(крім національних віз в Польщу)</span></p>
        <Select placeholder="Країна подорожі" class="selected"/>
      </div>
      <div class="block-big">
        <p class="text">Вид подорожі</p>
        <RadioBtn class="radio-text" firstText="Одноразова" secondText="Багаторазова"/>
      </div>
      <h3 class="heading">Договір</h3>
      <div class="block-small">
        <p class="text-heading">Кількість днів дії договору</p>
        <Select placeholder="Оберіть план дії договору" class="selected"/>
        <p class="text-grey">Загальна кількість днів дії договору / Кількість можливих днів перебування закордоном протягом
          дії договору незалежно від дат поїздок</p>
      </div>
      <div class="block-small">
        <p class="text-heading">Термін дії договору з</p>
        <DatePicker/>
      </div>
      <div class="block-big">
        <p class="text-heading">Термін дії договору по</p>
        <DatePicker/>
      </div>
    </div>
    <div class="right-side"></div>
  </div>
  <div class="insured-persons">
    <h3 class="heading">Застраховані особи</h3>
    <div class="tourist1">
      <div class="section-tourist">
        <div class="section-tourist-header">
          <h3 class="text-tourist">Турист 1</h3>
          <ButtonDelete text="Видалити"/>
        </div>
        <RadioBtnTourist class="radio-text" firstText="1-3 років" secondText="4-59 років" thirdText="60-65 років" fourthText="66-69 років"/>
      </div>
    </div>
  </div>
  <div class="btn">
    <div class="btn-mobile">
      <ButtonDefault text="Додати туриста" class="btn-default"/>
    </div>
    <ButtonSuccess text="Розрахувати"/>
  </div>
</div>
</div>
</template>

<script>

import Select from "../components/Select";
import RadioBtn from "../components/RadioBtn";
import DatePicker from "../components/DatePicker";
import ButtonDelete from "../components/ButtonDelete";
import ButtonDefault from "../components/ButtonDefault";
import ButtonSuccess from "../components/ButtonSuccess";
import RadioBtnTourist from "../components/RadioBtnTourist";
export default {
  name: "Step1",
  components: {RadioBtnTourist, ButtonSuccess, ButtonDefault, ButtonDelete, RadioBtn, Select, DatePicker}
}
</script>

<style scoped>
.step1{
  width: 1140px;
  margin: 0 auto;
  border: 2px solid #F8F9FB;
  box-sizing: border-box;
  border-radius: 8px;
}
@media (max-width: 480px) {
  .step1{
    width: 100%;
    border: none;
    margin-left: 16px;
    margin-right: 16px;
    box-sizing: border-box;
  }
}
.central-section{
  margin-top: 60px;
}
.heading{
  width: 360px;
  padding-bottom: 8px;
  border-bottom: 1px solid #EBEEF5;
}
@media (max-width: 480px) {
  .heading{
    width: 328px;
  }
}
.left-side{
  margin-left: 98px;
}
@media (max-width: 480px) {
  .left-side{
    margin: 0 auto;
  }
}
.grid{
  display: grid;
  grid-template-columns: repeat(2,1fr);
}

@media (max-width: 480px) {
  .grid{
    grid-template-columns: 1fr;
  }
}
.block-small{
  margin-bottom: 24px;
}
.block-big{
  margin-bottom: 56px;
}
@media (max-width: 480px) {
  .block-big{
    display: table-caption;
  }
}
.text-grey{
  width: 360px;
  color: #757575;
  font-size: 12px;
  font-family: Open Sans;
  margin-top: 16px;
  line-height: 20px;
}
.insured-persons{
  margin-left: 98px;
}
@media (max-width: 480px) {
  .insured-persons{
    margin: 0 auto;
  }
}
.section-tourist-header{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #E4E7ED;
  padding-left: 20px;
  align-items: baseline;
}

.tourist1{
  border: 1px solid #E4E7ED;
  border-radius: 4px;
  width: 262px;
}
@media (max-width: 480px) {
  .tourist1{
    width: 328px;
  }
}
.btn{
  display: flex;
  justify-content: center;
  margin-top: 64px;
  margin-bottom: 60px;
}
@media (max-width: 480px) {
  .btn{
   display: grid;
  }
}
@media (max-width: 480px) {
  .btn-mobile{
  margin-bottom: 16px;
  }
}
.btn-default{
  margin-right: 16px;
}
.radio-btn{
  padding-left: 20px;
}
.heading{
  color: #171717;
  font-weight: 600;
  font-size: 16px;
  font-family: Open Sans;
  margin-bottom: 32px;
}
.text{
  font-size: 14px;
  color: #171717;
  font-family: Open Sans;
  margin-bottom: 8px;
}
.text-faded{
  color: #C0C4CC;
}
@media (max-width: 480px) {
  .text-faded{
    display: flex;
    margin-top: 8px;
    margin-bottom: 12px;
  }
}
.text-heading{
  font-size: 14px;
  color: #171717;
  font-family: Open Sans;
  margin-bottom: 8px;
}
.text-tourist{
  font-size: 16px;
  color: #171717;
  font-family: Open Sans;
  font-weight: 300;
}
.radio-text{
  font-family: Open Sans;
  font-size: 14px;
  color: #757575;
}
@media (max-width: 480px) {
  .default{
    width: 328px;
  }
}
@media (max-width: 480px) {
  .selected{
    width: 328px;
  }
}
</style>
