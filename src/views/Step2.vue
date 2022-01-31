<template>
<div class="step2">
  <div class="central-section">
    <h1 class="header">Категорії покриття</h1>
    <div class="grid">
      <div class="category">
        <div class="popover-block">
          <p class="popover-text">Медичні витрати</p>
          <Popover/>
        </div>
        <div class="popover-block">
          <p class="popover-text">Невідкладна стоматологія</p>
          <Popover/>
        </div>
        <div class="popover-block">
          <p class="popover-text">COVID-19</p>
          <Popover/>
        </div>
        <div class="popover-block">
          <p class="popover-text">Нещасний випадок</p>
          <Popover/>
        </div>
        <div class="popover-block">
          <p class="popover-text">Страхування багажу</p>
          <Popover/>
        </div>
        <div class="popover-block">
          <p class="popover-text">Спорт</p>
          <Popover/>
        </div>
        <div class="popover-block">
          <p class="popover-text">Активний відпочинок</p>
          <Popover/>
        </div>
        <div class="popover-block">
          <p class="popover-text">Вартість</p>
        </div>
      </div>
      <div class="silver">
        <div class="img">
          <img src='../assets/img/silver.png' alt="Logo">
        </div>
        <div class="block">
          <p class="text">30 000</p>
        </div>
        <div class="block">
          <p class="text">50</p>
        </div>
        <div class="block">
          <p class="text">5 000</p>
        </div>
        <div class="block">
          <p class="text">-</p>
        </div>
        <div class="block">
          <p class="text">-</p>
        </div>
        <div class="block">
          <p class="text">-</p>
        </div>
        <div class="block">
          <p class="text">-</p>
        </div>
        <div class="block">
          <p class="text">200.44 грн</p>
        </div>
        <div class="btn">
          <ButtonSelect text="Обрати"/>
        </div>
      </div>
      <div class="plus">
        <ButtonPopular text="ПОПУЛЯРНО" class="btn-popular"/>
        <div class="img">
          <img src='../assets/img/plus.png' alt="Logo">
        </div>
        <div class="block block-plus">
          <p class="text">30 000</p>
        </div>
        <div class="block block-plus">
          <p class="text">50</p>
        </div>
        <div class="block block-plus">
          <p class="text">5 000</p>
        </div>
        <div class="block block-plus">
          <p class="text">20 000 грн</p>
        </div>
        <div class="block block-plus">
          <p class="text">-</p>
        </div>
        <div class="block block-plus">
          <p class="text">-</p>
        </div>
        <div class="block block-plus">
          <p class="text">-</p>
        </div>
        <div class="block block-plus">
          <p class="text">412.40 грн</p>
        </div>
        <div class="btn">
          <ButtonSelected text="Обрано" class="btn-selected"/>
        </div>
      </div>
      <div class="gold">
        <div class="img">
          <img src='../assets/img/gold.png' alt="Logo">
        </div>
        <div class="block">
          <p class="text">30 000</p>
        </div>
        <div class="block">
          <p class="text">50</p>
        </div>
        <div class="block">
          <p class="text">5 000</p>
        </div>
        <div class="block">
          <p class="text">20 000 грн</p>
        </div>
        <div class="block">
          <Select class="select"/>
        </div>
        <div class="block">
          <p class="text">-</p>
        </div>
        <div class="block">
          <p class="text">-</p>
        </div>
        <div class="block">
          <p class="text">468 грн</p>
        </div>
        <div class="btn">
          <ButtonSelect text="Обрати"/>
        </div>
      </div>
    </div>
  </div>
  <div class="basket">
    <h1 class="header-basket">Корзина</h1>
    <p class="text-basket">Тип подорожі</p>
    <p class="text-active">Багаторазова</p>
    <p class="text-basket">Місце подорожі</p>
    <p class="text-active">Весь світ</p>
    <p class="text-basket">План договору</p>
    <p class="text-active">365/90</p>
    <p class="text-basket">Термін дії договору</p>
    <p class="text-active">7 днів</p>
    <p class="text-basket">Застраховано</p>
    <p class="text-active">3 особи</p>
    <p class="text-basket">Категорія покриття</p>
    <p class="text-active">GOLD</p>
    <p class="text-basket">Усього</p>
    <p class="text-active">672,48 грн</p>
    <ButtonArrange text="Оформити" class="btn-arrange"/>
  </div>
</div>
</template>

<script>
import Popover from "../components/Popover";
import Select from "../components/Select";
import ButtonDefault from "../components/ButtonDefault";
import ButtonSuccess from "../components/ButtonSuccess";
import ButtonPopular from "../components/ButtonPopular";
import ButtonArrange from "../components/ButtonArrange";
import ButtonSelected from "../components/ButtonSelected";
import ButtonSelect from "../components/ButtonSelect";
// import SideBarStep2 from "../components/SideBarStep2";
export default {
  name: "Step2",
  components: {ButtonSelect, ButtonSelected, ButtonArrange, ButtonPopular, ButtonSuccess, ButtonDefault, Select, Popover}
}
</script>

<style scoped>
.step2{
display: grid;
  grid-template-columns: repeat(2,1fr);
  margin-left: 189px;
}
@media (max-width: 480px) {
  .step2{
    margin-left: 16px;
  }
}
.header{
  font-family: Open Sans;
  font-weight: 600;
  font-size: 20px;
  color: #171717;
  margin-bottom: 16px;
}
.central-section{
  margin: 0 auto;
  border: 2px solid #F8F9FB;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 60px 0 60px 98px;
  width: 878px;
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
.grid{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  margin-bottom: 8px;
}
.category{
margin-top: 285px;
}
.silver{
  text-align: center;
  margin-top: 76px;
}
.plus{
  text-align: center;
  border: 1px solid #67C23A;
  box-sizing: border-box;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  background-color: #F0F9EB;
}
.gold{
  text-align: center;
  margin-top: 76px;
}
.basket{
  width: 262px;
  background: #F8F9FB;
  justify-content: center;
  display: grid;
  padding-bottom: 76px;
}
.header-basket{
  margin-top: 81px;
  margin-bottom: 32px;
  font-family: Open Sans;
  font-weight: 600;
  font-size: 18px;
  color: #171717;
}
.text-basket{
  font-family: Open Sans;
  font-size: 14px;
  color: #171717;
  margin-bottom: 8px;
}
.text-active{
  font-family: Open Sans;
  font-weight: 600;
  font-size: 14px;
  color: #47A04A;
  margin-bottom: 24px;
}
.img{
  height: 209px;
}
.popover-block{
  height: 52px;
  border-bottom: 2px solid #F8F9FB;
  display: flex;
  align-items: center;
}
.block{
  height: 52px;
  border-bottom: 2px solid #F8F9FB;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn{
  margin-top: 24px;
  display: flex;
  justify-content: center;
}
.popover-text{
  margin-right: 11px;
  font-family: Open Sans;
  font-size: 13px;
  color: #171717;
}
.text{
  font-family: Open Sans;
  font-size: 14px;
  color: #171717;
}
.select{
  width: 120px;
}
.btn-popular{
  justify-content: center;
  margin-top: 12px;
  margin-bottom: 24px;
}
.btn-selected{
  margin-bottom: 24px;
}
.block-plus{
  border-color: #E1F3D8;
}
</style>
