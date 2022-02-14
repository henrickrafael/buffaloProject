$(function(){

    cliqueMenu();
    scrollList();
    editTeam();

    function cliqueMenu(){
        $('#menuLink a, .list-group a').click(function(){
            $('.list-group a').removeClass('active');
            $('.list-group a').removeClass('fontClass');
            $('#menuLink a').parent().removeClass('active');
            $('#menuLink a').removeClass('fontClass');
            $('#menuLink a[ref_sys='+$(this).attr('ref_sys')+']').parent().addClass('active');
            $('#menuLink a[ref_sys='+$(this).attr('ref_sys')+']').addClass('fontClass');
            $('.list-group a[ref_sys='+$(this).attr('ref_sys')+']').addClass('active').addClass('fontClass');
            return false;
        });
    }


    function scrollList() {
        $('.list-group a').click(function(){

            /*Os nomes são baseados nos atributos dentro da class list-group e concatena com o # para indicar um id.
            Em seguida concatena novamente com o '_section'. Desse modo ele consegue referenciar o id que estão nas divs
            panel panel-default do BS5 onde estão as pequenas sessões de informativos, cadastro de equipe relatório simples
            */

            var attrClick = '#'+$(this).attr('ref_sys')+'_section'; 
            var offSet = $(attrClick).offset().top;
            $('html,body').animate({'scrollTop':offSet});
        });
    }

    function editTeam() {
        $('#rel_simpleRel_section a').click(function(){
           
            const editClick = '#rel_cad_section';
            var editOffSet = $(editClick).offset().top;
            $('html,body').animate({'scrollTop':editOffSet});

        })
    }

})