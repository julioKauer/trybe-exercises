let months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];
let mon = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];
let weekdays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
function preventDef(event) {
  event.preventDefault();
}

const states = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
];

window.onload = function () {
  const selectState = document.querySelector('#state');

  states.forEach((state) => {
    const option = document.createElement('option');
    option.innerHTML = state;
    option.value = state;
    selectState.appendChild(option);
  });
  let calendar = document.getElementById('start-date');
  calendar.DatePickerX.init({
    format: 'dd/mm/yyyy',
    singleMonthLabels: months,
    shortMonthLabels: mon,
    todayButton: false,
    clearButton: false,
    weekDayLabels: weekdays,
    mondayFirst: false,
  });
  // let sendButton = document.querySelector('#send');
  // sendButton.addEventListener('click', function () {
  //   sendButton.addEventListener('click', preventDef, false);
  // });
new window.JustValidate('.js-form', {
  rules: {
    email: {
      required: true,
      email: true,
      remote: {
        url: 'https://just-validate-api.herokuapp.com/check-correct',
        sendParam: 'email',
        successAnswer: 'OK',
        method: 'GET',
      },
    },
    name: {
      required: true,
    }
  },
  messages: {
    name: {
      minLength: 'escreve ds fdsag gdaaaaaa s',
    },
  },
  focusWrongField: true,
  submitHandler: function (form, values, ajax) {
    console.log(values);
    ajax({
      url: 'https://just-validate-api.herokuapp.com/submit',
      method: 'POST',
      data: values,
      async: true,
      callback: (response) => {
        console.log(response);
      },
    });
  },
  invalidFormCallback: function (errors) {
    console.log(errors);
  },
});
};
