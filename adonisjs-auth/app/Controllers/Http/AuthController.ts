import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema , rules } from '@ioc:Adonis/Core/Validator'


export default class AuthController {

    public async registerShow({ view }: HttpContextContract){
        return view.render('auth/register');
    }

    public async register({request , response ,auth} : HttpContextContract){
        const userSchema = schema.create({
            username : schema.string({trim:true} , [rules.unique({table :'users' , column : 'username' , caseInsensitive :true})]),
            email : schema.string({trim:true} , [ rules.email(), rules.unique({table :'users' , column : 'username' , caseInsensitive :true})]),
            password : schema.string({} , [rules.minLength(8)])
             
        })

    }

    public async loginShow({ view }: HttpContextContract){
        return view.render('auth/login');
    }

}
