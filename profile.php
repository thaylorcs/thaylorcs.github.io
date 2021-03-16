<?php require_once('header.php') ?>

<div class="profile">
    <div id="logo"><a href="index.php"><img src="img/logov2.png" alt="Minha Logo"></a></div>
    <h1>Thaylor Carvalho</h1>

    <nav class="menu">
        <ul>
            <li><a href="index.php">home</a></li>
            <li><a href="calculadora.php">projetos</a></li>
            <li><a href="#">contato</a></li>
        </ul>
    </nav>

    <div class="container text-center">
		<div class="socials">
            <a href="https://www.linkedin.com/in/thaylorcs/" target="_blank"><i class="fab fa-linkedin"></i></a>
		    <a href="https://github.com/thaylorcs" target="_blank"><i class="fab fa-github-square"></i></a>
		    <a href="https://api.whatsapp.com/send?phone=5511978014551"><i class="fab fa-whatsapp-square"></i></a>
		    <a href="mailto:thaylorcs@outlook.com"><i class="fas fa-envelope"></i></a>
        </div>
        <p>2019 - <?php $today = date("Y"); echo $today?></p>
	</div>
</div>

<?php require_once('footer.php') ?>