$('#registerModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  var modal = $(this)
  modal.find('.modal-title').text('Claim Your Spot Now !' + recipient)
  modal.find('.modal-body input').val(recipient)
})

$('#thankYouModal').on('shown.bs.modal', function (event) {
  var button = $(event.relatedTarget)
})

$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
  xxl: 2320px;
);