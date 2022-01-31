<template>
  <div class="contact">
    <div class="central-section">
          <h3 class="header-section">Оплата пройшла успішно!</h3>
          <p class="text">Ваш договір відправленно Вам на електронну адресу</p>
          <p class="text">Дякуємо, що стали клієнтом Страхової компанії Універсальна.</p>
          <div class="block-big">
            <p class="text-input">E-mail для відправки доставки</p>
            <InputSuccess/>
          </div>
          <p class="text-upload">Завантажити договір</p>
          <p class="text-upload">Завантажити квитанцію про оплату</p>
        <div class="btn">
          <ButtonSuccess text="На Головну"/>
        </div>
      </div>
  </div>
</template>

<script>
// import Input from "../components/Input";
import DatePicker from "../components/DatePicker";
import RadioBtn from "../components/RadioBtn";
import InputSearch from "../components/InputSearch";
import ButtonDefault from "../components/ButtonDefault";
import ButtonSuccess from "../components/ButtonSuccess";
import Checkbox from "../components/Checkbox";
import Menu from "../components/Menu";
import InputSuccess from "../components/InputSuccess";
export default {
  name: "PaymentSuccess",
  components: {InputSuccess, Menu, Checkbox, ButtonSuccess, ButtonDefault, InputSearch, RadioBtn, DatePicker}
}
</script>

<style scoped>
.contact{
  margin: 160px 0 268px;
}
.central-section{
  width: 555px;
  margin: 0 auto;
  border: 2px solid #F8F9FB;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 60px 97px 68px 98px;
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
.header-section{
  font-family: Raleway;
  font-size: 20px;
  color: #171717;
  margin-bottom: 32px;
  font-weight: 600;
}
@media (max-width: 480px) {
  .header-section{
    width: 328px;
    font-size: 28px;
    line-height: 1.5;
  }
}
.text{
  font-size: 14px;
  color: #171717;
  font-family: Open Sans;
  margin-bottom: 25px;
}
@media (max-width: 480px) {
  .text{
    width: 328px;
    line-height: 1.5;
    font-size: 16px;
  }
}
.block-big{
  margin-bottom: 30px;
}
@media (max-width: 480px) {
  .block-big{
    width: 328px;
  }
}
.text-input{
  font-family: Open Sans;
  color: #171717;
  font-size: 14px;
  margin-bottom: -6px;
}
.text-upload{
  font-family: Open Sans;
  font-weight: 600;
  font-size: 14px;
  color: #757575;
  margin-bottom: 28px;
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
