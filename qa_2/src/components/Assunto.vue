<template>
    <router-link to="/">
        <div v-if="Oque">
            <div class="Container-assunto-Funciona" >
                <h2>Como Funciona?</h2>
                    <div class="text">
                        <p>O segundo quadrante realiza testes que validam o comportamento do sistema (BDD), seus testes são focados em itens que são importantes para o cliente e para o usuarío final, esses testes podem ser automaticos ou manuais e verificam se as funcionalidades do sistemas estão  operando corretamente, que são realizados durante a produção do sistema e após sua finalização.</p>
                    </div>
            </div>
        </div>

        <div  v-if="Vant">
            <div class="Container-assunto-Diferente">
                <h2>Vantagens X Desvantagens</h2>
                    <div class="text">
                        <div id="colunas">
                        <div id="coluna-esquerda">
                            <h3>Vantagens</h3>
                            <ul>
                                <li>Redução de custos e de testes em geral</li>
                                <li>Automatização de testes de regressão</li>
                                <li>Aumento da eficiência da equipe de desenvolvimento.</li>
                            </ul>
                        </div>
                        <div id="coluna-direita">
                            <h3>Desvantagens</h3>
                            <ul>
                                <li>Falta de habilidades avançadas de gerenciamento de testes</li>
                                <li>Dificuldade em criar casos de teste complexos</li>
                                <li>Dificuldade em avaliar a qualidade do software testado</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="Rece">
            <div class="Container-assunto">
                <h2>Recomendações</h2>
                    <div class="text">
                        <p>Esse quadrante é recomendado para equipes de desenvolvimento que precisam de uma ferramenta de automação de testes, e de preferência aos que possuam uma boa organização de testes</p>
                    </div>
            </div>
        </div>

        <div v-if="Dica">
            <div class="Container-assunto">
                <h2>Dicas</h2>
                    <div class="text">
                        <li>Avalie a necessidade de testes da equipe.</li>
                        <li>Considere as limitações do quadrante.</li>
                        <li>Verifique a compatibiliadade com outras ferramentas utilizadas</li>
                    </div>
            </div>
        </div>

        <div v-if="Desc">
            <div class="Container-assunto">
                <h2>Destaques</h2>
                    <div class="text">
                        <li>Testes Funcionais</li>
                        <li>Testes de Regressão</li>
                        <li>Testes de Integração</li>
                        <li>Testes de Sistema</li>
                        <li>Testes de Aceitação</li>
                    </div>
            </div>
        </div>
        
    </router-link>
</template>
<script>
    export default {
        props:{
            Oque: Boolean,
            Vant: Boolean,
            Rece: Boolean,
            Dica: Boolean,
            Desc: Boolean
        }
        
    }

</script>
<style scoped>
    .Container-assunto{
        height: 200px;
        background-color: antiquewhite;
        min-width: 580px;
        max-width: 600px;
        min-height: 420px;
        padding: 40px 30px;
        border: gray solid 2px;
        border-radius: 20px;
        
    }
    .Container-assunto-Diferente{
        height: 200px;
        background-color: antiquewhite;
        min-width: 580px;
        max-width: 900px;
        min-height: 420px;
        padding: 30px;
        border: gray solid 2px;
        border-radius: 20px;
        
    }
    .Container-assunto-Funciona{
        height: 200px;
        background-color: antiquewhite;
        min-width: 580px;
        max-width: 700px;
        min-height: 420px;
        padding: 30px;
        border: gray solid 2px;
        border-radius: 20px;
        
    }
    
    .text{
        color: rgb(85, 91, 97);
        font-size: 25px;
        text-align: justify;
        margin-top: 30px;
    }
    h2{
        text-align: center;
    }
    #colunas {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    width: 100%;
    }
  
    #coluna-esquerda {
        width: 50%;
        padding: 10px;
    }
  
    #coluna-direita {
        width: 50%;
        padding: 10px;
    }
    h3{
        font-size: 30px;
        margin-bottom: 20px;
    }
    li{
        margin: 20px 10px;
    }
    #Oq{
        width: 580px;
    }
</style>