<?php 
	require_once('header.php'); 
	require_once('profile.php');
?>

	<div class="content">
	<div class="container-fluid" id="slider">
		<img class="img-fluid" src="img/servidores.jpg" alt="Servidores">
	</div>

	<div class="container services text-center">
		<div class="row">
			<div id="servidores" class="col-md-4">
				<i class="fa fa-server"></i>
				<p class="text-center">Administração de Servidores</p>
			</div>
			<div id="suporte" class="col-md-4">
				<i class="fa fa-laptop-medical"></i>
				<p>Suporte Técnico</p>
			</div>
			<div id="dev-web" class="col-md-4">
				<i class="fa fa-code"></i>
				<p>Desenvolvimento Web</p>
			</div>
		</div>
	</div>
	<div class="container cta text-center">
		<p>Precisa de ajuda?</p>
		<a href="mailto:thaylorcs@outlook.com">Entre em contato</a>
	</div>
	</div>

<?php require_once('footer.php'); ?>