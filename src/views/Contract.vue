<template>
  <div class="contact">
    <div class="section">
      <h1 class="header">Оформлення договору</h1>
      <div class="central-section">
        <div class="grid">
          <div class="left-side">
            <h3 class="header-section">Дані для відправки</h3>
            <p class="text text-indent">Ми відправили код підтвердження на <span class="text-green">+38 063 000 00 00</span></p>
            <div class="block-big">
              <p class="text">E-mail для online доставки</p>
              <Input/>
            </div>
            <div class="block-big">
              <p class="text">Код підтвердження</p>
              <Input/>
            </div>
            <p class="text text-link">Не отримали повідомлення СМС чи Viber? Натисніть <el-link type="success">тут</el-link>.</p>
            <h3 class="header-section">Програма лояльності <span class="text-red">Fishka</span> (опціонально)</h3>
            <Menu/>
            <div class="input-fishka">
              <p class="text">Номер карти Fishka</p>
              <Input placeholder="XXXX-XXXX-XXXX-XXXX"/>
            </div>
            <p class="text-footer">Зразок договору (Tourist, Поло М. М., Багаж)</p>
          </div>
        </div>
        <div class="btn">
          <ButtonSuccess text="Придбати"/>
        </div>
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
import Menu from "../components/Menu";
export default {
  name: "Contact",
  components: {Menu, Checkbox, ButtonSuccess, ButtonDefault, InputSearch, RadioBtn, DatePicker, Input}
}
</script>

<style scoped>
.contact{
  margin-top: 124px;
  margin-bottom: 100px;
}
.grid{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  margin-bottom: 32px;
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
  margin-bottom: 32px;
  margin-left: 275px;
  font-family: Open Sans;
  color: #171717;
  font-weight: 600;
  font-size: 20px;
}
@media (max-width: 480px) {
  .header{
    width: 328px;
    margin-left: 16px;
  }
}
.text-green{
  color: #47A04A;
}
@media (max-width: 480px) {
  .text-green{
display: grid;
    margin-top: 12px;
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
    font-size: 16px;
  }
}
.text{
  font-size: 14px;
  color: #171717;
  font-family: Open Sans;
  margin-bottom: 8px;
}
.text-indent{
  margin-bottom: 24px;
}
.text-link{
  margin-bottom: 48px;
}
.block-big{
  margin-bottom: 24px;
}
.input-fishka{
  margin-bottom: 56px;
}
.text-red{
  font-size: 14px;
  color: red;
  font-family: Open Sans;
}
.text-footer{
  font-family: Open Sans;
  font-weight: 600;
  font-size: 14px;
  color: #757575;
}
.btn{
  display: flex;
  justify-content: center;
}
@media (max-width: 480px) {
  .btn{
    justify-content: flex-start;
  }
}
</style>
