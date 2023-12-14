import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяПоДоговору: DS.attr('decimal'),
  доступно: DS.attr('decimal'),
  едВремени: DS.attr('i-i-s-modul-ucheta-ед-времени'),
  использовано: DS.attr('decimal'),
  оказУслуг: DS.hasMany('i-i-s-modul-ucheta-оказ-услуг', { inverse: 'расчетОстВрем', async: false })
});

export let ValidationRules = {
  времяПоДоговору: {
    descriptionKey: 'models.i-i-s-modul-ucheta-расчет-ост-врем.validations.времяПоДоговору.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  доступно: {
    descriptionKey: 'models.i-i-s-modul-ucheta-расчет-ост-врем.validations.доступно.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  едВремени: {
    descriptionKey: 'models.i-i-s-modul-ucheta-расчет-ост-врем.validations.едВремени.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  использовано: {
    descriptionKey: 'models.i-i-s-modul-ucheta-расчет-ост-врем.validations.использовано.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  оказУслуг: {
    descriptionKey: 'models.i-i-s-modul-ucheta-расчет-ост-врем.validations.оказУслуг.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетОстВремE', 'i-i-s-modul-ucheta-расчет-ост-врем', {
    времяПоДоговору: attr('Время по договору', { index: 0 }),
    едВремени: attr('Единица времени', { index: 1 }),
    использовано: attr('Использовано', { index: 2 }),
    доступно: attr('Доступно', { index: 3 }),
    оказУслуг: hasMany('i-i-s-modul-ucheta-оказ-услуг', 'Оказание услуг', {
      дата: attr('Дата', { index: 0 }),
      времяКонсульт: attr('Время консульт', { index: 1 }),
      едВремени: attr('Ед времени', { index: 2 }),
      услуги: belongsTo('i-i-s-modul-ucheta-услуги', 'Услуги', {
        затрВремя: attr('', { index: 4 })
      }, { index: 3, displayMemberPath: 'наименование' }),
      договор: belongsTo('i-i-s-modul-ucheta-договор', 'Договор', {
        длительность: attr('Длительность', { index: 6 })
      }, { index: 5, displayMemberPath: 'номер' })
    })
  });

  modelClass.defineProjection('РасчетОстВремL', 'i-i-s-modul-ucheta-расчет-ост-врем', {
    времяПоДоговору: attr('Время по договору', { index: 0 }),
    едВремени: attr('Единица времени', { index: 1 }),
    использовано: attr('Использовано', { index: 2 }),
    доступно: attr('Доступно', { index: 3 })
  });
};
