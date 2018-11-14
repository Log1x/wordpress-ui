/**
 * Date Time Now
 */
import dayjs from 'dayjs';

function init() {
  if ($('#timestampdiv').length > 0) {
    $('#timestampdiv').find('p')
      .prepend($('<a>')
        .attr('class', 'date-now button')
        .append('Now')
      )
      .css('margin-right', '0.5em')
  }

  if ($('.inline-edit-date').length > 0) {
    $('.inline-edit-date').find('div')
      .prepend($('<a>')
        .attr('class', 'date-now button')
        .append('Now')
        .css('margin-right', '0.5em')
      )
  }

  $('.date-now').bind('click', function () {
    let time = dayjs();

    if ($('select[name="mm"]').length > 0) {
      $('select[name="mm"]').val(time.format('MM'));
    }

    if ($('input[name="jj"]').length > 0) {
      $('input[name="jj"]').val(time.format('DD'));
    }

    if ($('input[name="aa"]').length > 0) {
      $('input[name="aa"]').val(time.format('YYYY'));
    }

    if ($('input[name="hh"]').length > 0) {
      $('input[name="hh"]').val(time.format('HH'));
    }

    if ($('input[name="mn"]').length > 0) {
      $('input[name="mn"]').val(time.format('mm'));
    }
  });
}

export default {
  init
};
