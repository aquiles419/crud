import * as Yup from 'yup';
import Company from "../models/Company";


class CompanyController{
    async store(req,res){
        const schema = Yup.object().shape({
            nomeFantasia: Yup.string().required(),
            razaoSocial: Yup.string().required(),
            cpnj: Yup.string().required(),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error: "Falha ao cadastrar empresa."});
        }


        const {nomeFantasia,razaoSocial,cnpj} = req.body;

        const companys = await Company.create({
            user_id: req.user_id,
            nomeFantasia,
            razaoSocial,
            cnpj,
           
        })



        return res.json(companys)
    }
}

export default new CompanyController();
