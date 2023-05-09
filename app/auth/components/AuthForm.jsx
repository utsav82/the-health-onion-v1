'use client';

import axios from "axios";
import { signIn, useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import{ FcGoogle } from "react-icons/fc"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";
import Input from "app/components/Input.jsx";
import AuthSocialButton from './AuthSocialButton';
import Button from "app/components/Button.jsx";


const AuthForm = () => {
//   const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState('LOGIN');
  const [isLoading, setIsLoading] = useState(false);


  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit = (data) => {

    setIsLoading(true);
  
    if (variant === 'REGISTER') {
      
    }

    if (variant === 'LOGIN') {
     
    }
  }

  const socialAction = (action) => {
    setIsLoading(true);

  } 

  return ( 
    <div className= {`sm:mx-auto sm:w-full sm:max-w-md `+(variant === 'REGISTER'?"mt-36 w-[80%]":"mt-8")}>
      <div 
        className="
        bg-white
          px-4
          py-8
          shadow
          rounded-lg
          sm:px-10
        "
      >
        <h1 className="text-center sm:py-5 font-bold text-2xl ">{variant}</h1>
        <form 
          className="space-y-6" 
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant === 'REGISTER' && (
            <Input
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              id="name" 
              label="Name"
            />
          )}
          <Input 
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            id="email" 
            label="Email address" 
            type="email"
          />
          <Input 
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            id="password" 
            label="Password" 
            type="password"
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === 'LOGIN' ? 'Sign in' : 'Register'}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div 
              className="
                absolute 
                inset-0 
                flex 
                items-center
              "
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton 
              icon={BsGithub} 
              onClick={() => socialAction('github')} 
            />
            <AuthSocialButton 
              icon={FcGoogle} 
              onClick={() => socialAction('google')} 
            />
          </div>
        </div>
        <div 
          className="
            flex 
            gap-2 
            justify-center 
            text-sm 
            mt-6 
            px-2 
            text-gray-500
          "
        >
          <div>
            {variant === 'LOGIN' ? 'New to The Health Onion?' : 'Already have an account?'} 
          </div>
          <div 
            onClick={toggleVariant} 
            className="underline cursor-pointer"
          >
            {variant === 'LOGIN' ? 'Create an account' : 'Login'}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default AuthForm;
