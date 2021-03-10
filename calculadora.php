<?php require_once('header.php'); ?>

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery.maskMoney.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
          $("input.dinheiro").maskMoney({showSymbol:false, symbol:"R$", decimal:",", thousands:"."});
    });
</script>

<div class="container">

    
    <h1>Calculadora de Doações - Instituto Hahaha</h1>
    <p>Esse foi meu primeiro trabalho, usando JS para uma instituição de caridade. 
    <br>Foi entregue em Outubro de 2018.
    Por isso, pode ser que os cálculos não sejam mais válidos.</p>
    

    <form action="#">
        <table class="table table-dark table-sm table-striped">
            <tr>
                <td><p>Total de rendimentos:</p></td>
                <td></td>
                <td><input type="text" class="dinheiro" id="total-rendimentos" onblur="calcDependentes();" required></td>
            </tr>
            <tr>
                <td><h3>Deduções</h3></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td><p>Quantidade de dependentes:</p></td>
                <td><input size="2" maxlength="2" type="text" id="qtd-dependentes" onblur="calcDependentes();"></td>
                <td><input type="text" class="dinheiro" id="valor-dependentes" disabled="disabled"></td>
            </tr>
            <tr>
                <td><p>INSS</p></td>
                <td></td>
                <td><input type="text" class="dinheiro" id="val-inss" onblur="calcTotal();"></td>
            </tr>
            <tr>
                <td><p>Despesas Médicas</p></td>
                <td></td>
                <td><input type="text" class="dinheiro" id="desp-medicas" onblur="calcTotal();"></td>
            </tr>
            <tr>
                <td><p>Despesas com Instrução:</p></td>
                <td></td>
                <td><input type="text" class="dinheiro" id="desp-instrucao" onblur="calcTotal();"></td>
            </tr>
            <tr>
                <td><p>Pensão Judicial: </p></td>
                <td></td>
                <td><input type="text" class="dinheiro" id="pensao-judicial" onblur="calcTotal();"></td>
            </tr>
            <tr>
                <td><p>Previdência Privada e FAPI</p></td>
                <td></td>
                <td><input type="text" class="dinheiro" id="previdencia" onblur="calcTotal();"></td>
            </tr>
            <tr>
                <td><p>Aposentado</p></td>
                <td></td>
                <td><input type="text" id="aposentado" class="dinheiro" onblur="calcTotal();"></td>
            </tr>
            <tr>
                <td><h3>Total de deduções</h3></td>
                <td></td>
                <td><input type="text" class="dinheiro" id="total-deducoes" disabled="disabled"></td>
            </tr>
            <tr>
                <td><p>Base de Cálculo</p></td>
                <td></td>
                <td><input type="text" class="dinheiro" id="base-calculo" disabled="disabled"></td>
            </tr>
            <tr>
                <td><p>Valor de Redução</p></td>
                <td></td>
                <td><input type="text" name="" id="aliquota" class="dinheiro" disabled="disabled"></td>
            </tr>
            <tr>
                <td><p>Imposto devido</p></td>
                <td></td>
                <td><input type="text" class="dinheiro" id="imposto" disabled="disabled"></td>
            </tr>
            <tr>
                <td><h3>Valor máximo da doação</h3></td>
                <td></td>
                <td><input type="text" class="dinheiro" id="valor-doacao" disabled="disabled"></td>
            </tr>
        </table>
    </form>
</div>
        

<script type="text/javascript" src="js/calculator.js"></script>

<?php require_once('footer.php'); ?>