form id="myForm" action="#" method="post"{
        <label for="nome">Nome:</label><br>
        <input type="text" id="nome" name="nome" required><br>

        <label for="sobrenome">Sobrenome:</label><br>
        <input type="text" id="sobrenome" name="sobrenome" required><br>

        <label for="data_nascimento">Data de Nascimento:</label><br>
        <input type="date" id="data_nascimento" name="data_nascimento" required><br>

        <label for="nacionalidade">Nacionalidade:</label><br>
        <input type="text" id="nacionalidade" name="nacionalidade" required><br>

        <label for="estado_civil">Estado Civil:</label><br>
        <select id="estado_civil" name="estado_civil" required>
            <option value="">Selecione...</option>
            <option value="solteiro">Solteiro(a)</option>
            <option value="casado">Casado(a)</option>
            <option value="divorciado">Divorciado(a)</option>
            <option value="viuvo">Viúvo(a)</option>
            <option value="outro">Outro</option>
        </select><br>

        <label for="profissao">Profissão:</label><br>
        <input type="text" id="profissao" name="profissao" required><br>

        <label for="cpf">CPF:</label><br>
        <input type="text" id="cpf" name="cpf" required><br>

        <label for="rg">RG:</label><br>
        <input type="text" id="rg" name="rg" required><br>

        <label for="endereco">Endereço:</label><br>
        <input type="text" id="endereco" name="endereco" required>

        <label for="numero_endereco">Número do Endereço:</label><br>
        <input type="text" id="numero_endereco" name="numero_endereco" required>

        <label for="bairro">Bairro:</label><br>
        <input type="text" id="bairro" name="bairro" required><br>

        <label for="complemento">Complemento:</label><br>
        <input type="text" id="complemento" name="complemento"><br>

        <label for="cidade">Cidade:</label><br>
        <input type="text" id="cidade" name="cidade" required><br>

        <label for="cep">CEP:</label><br>
        <input type="text" id="cep" name="cep" required><br>

        <label for="whatsapp">WhatsApp:</label><br>
        <input type="text" id="whatsapp" name="whatsapp" required><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br>

        <label for="login">Login:</label><br>
        <input type="text" id="login" name="login" required><br>

        <label for="senha">Senha:</label><br>
        <input type="password" id="senha" name="senha" required><br><br>

        <input type="submit" value="Enviar">
    </form>

    <script>
        document.getElementById('myForm').addEventListener('submit', function(event) {
            var nome = document.getElementById('nome').value;
            var sobrenome = document.getElementById('sobrenome').value;
            var dataNascimento = document.getElementById('data_nascimento').value;
            var nacionalidade = document.getElementById('nacionalidade').value;
            var estadoCivil = document.getElementById('estado_civil').value;
            var profissao = document.getElementById('profissao').value;
            var cpf = document.getElementById('cpf').value;
            var rg = document.getElementById('rg').value;
            var endereco = document.getElementById('endereco').value;
            var numeroEndereco = document.getElementById('numero_endereco').value;
            var bairro = document.getElementById('bairro').value;
            var cidade = document.getElementById('cidade').value;
            var cep = document.getElementById('cep').value;
            var whatsapp = document.getElementById('whatsapp)
}