<template>
  <div class="step4">
    <div class="central-section">
      <div class="grid">
        <div class="left-side">
          <Progress />
          <h1 class="header">Застрахована особа 2</h1>
          <h3 class="header-section">Особисті данні</h3>
          <p class="text">Купуєте поліс для себе</p>
          <RadioBtn class="radio-text" firstText="Так" secondText="Ні"/>
          <div class="block-big">
            <p class="text">Прізвище</p>
            <Input/>
          </div>
          <div class="block-small">
            <p class="text">Ім’я</p>
            <Input/>
          </div>
          <div class="block-big">
            <p class="text">Прізвище та ім’я <span class="text-faded">(Латиницею)</span></p>
            <Input/>
          </div>
          <div class="block-big">
            <p class="text">Дата народження</p>
            <DatePicker/>
          </div>
          <div class="block-big bigger">
            <p class="text">Номер мобільного телефону</p>
            <Input placeholder="+38 XXX XXX XX XX"/>
          </div>
          <h3 class="header-section">Документи</h3>
          <div class="block-big">
            <p class="text">Серія та номер закордонного паспорту</p>
            <div class="double-input">
              <Input placeholder="АА"/>
              <Input placeholder="XX XX XX"/>
            </div>
          </div>
          <div class="block-big">
            <p class="text">Статус</p>
            <RadioBtn class="radio-text" firstText="Резидент" secondText="Не резидент"/>
          </div>
          <Checkbox/>
        </div>
      </div>
      <div class="btn">
        <div class="btn-mobile">
          <ButtonDefault text="Назад" class="btn-default"/>
        </div>
        <ButtonSuccess text="Розрахувати"/>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../components/Input";
import DatePicker from "../components/DatePicker";
import RadioBtn from "../components/RadioBtn";
import InputSearch from "../components/InputSearch";
import ButtonDefault from "../components/ButtonDefault";
import ButtonSuccess from "../components/ButtonSuccess";
import Checkbox from "../components/Checkbox";
import Progress from "../components/Progress";
export default {
  name: "Step4",
  components: {Progress, Checkbox, ButtonSuccess, ButtonDefault, InputSearch, RadioBtn, DatePicker, Input}
}
</script>

<style scoped>
.grid{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  margin-bottom: 32px;
}
.left-side{
  width: 360px;
}
.central-section{
  width: 1140px;
  margin: 0 auto;
  border: 2px solid #F8F9FB;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 60px 0 60px 98px;
}
@media (max-width: 480px) {
  .central-section{
    width: 100%;
    border: none;
    margin-left: 16px;
    margin-right: 16px;
    box-sizing: border-box;
    padding: 48px 0;
  }
}
.header{
  width: 360px;
  margin-bottom: 32px;
  font-family: Open Sans;
  font-weight: 600;
  font-size: 18px;
  color: #171717;
}
@media (max-width: 480px) {
  .header{
    width: 328px;
  }
}
.header-section{
  font-family: Open Sans;
  font-weight: 600;
  font-size: 14px;
  color: #171717;
  padding-bottom: 8px;
  border-bottom: 1px solid #EBEEF5;
  margin-bottom: 32px;
}
@media (max-width: 480px) {
  .header-section{
    width: 328px;
  }
}
.text{
  font-size: 14px;
  color: #171717;
  font-family: Open Sans;
  margin-bottom: 10px;
}
.text-faded{
  color: #C0C4CC;
}
.radio-text{
  font-family: Open Sans;
  font-size: 14px;
  color: #757575;
  margin-bottom: 32px;
}
@media (max-width: 480px) {
  .radio-text{
    display: grid;
    margin-bottom: 36px;
  }
}
.block-big{
  margin-bottom: 24px;
}
@media (max-width: 480px) {
  .block-big{
    width: 328px;
  }
}
.bigger{
  margin-bottom: 48px;
}
.block-small{
  margin-bottom: 14px;
}
@media (max-width: 480px) {
  .block-small{
    width: 328px;
  }
}
.double-input{
  display: flex;
}
.btn{
  display: flex;
  justify-content: center;
  align-items: baseline;
}
@media (max-width: 480px) {
  .btn{
    display: grid;
    justify-content: flex-start;
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
</style>
