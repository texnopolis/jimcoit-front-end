import { Injectable } from '@angular/core';

@Injectable()
export class NewsService {

  constructor() { }

  getNews() {
    return [
      {
        url: '',
        title: 'Студенты ХПИ проанализировали свойства и состав воды',
        text: 'Пятнадцать студентов кафедры технологии жиров и продуктов брожения НТУ «ХПИ» вместе с харьковскими технологами изучали интересные свойства воды и особенности производства безалкогольных напитков ..',
      },
      {
        url: '',
        title: 'ХПИ подписал меморандум о сотрудничестве с грузинским университетом',
        text: 'Национальный технический университет «Харьковский политехнический институт» и Грузинский технический университет расширяют сотрудничество в образовательной и научно-исследовательской деятельности ..',
      },
      {
        url: '',
        title: 'Программа НАТО — Украина в ХПИ',
        text: '22 февраля 2018 года состоялась торжественная церемония выпуска слушателей, прошедших обучение по программе НАТО—Украина, касающейся переподготовки военнослужащих. Базой для занятий стал Межотраслевой институт последипломного ..',
      }];
  }
}
