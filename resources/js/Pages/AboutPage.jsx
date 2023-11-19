import React from 'react';
import {Head} from '@inertiajs/inertia-react';
import { Result } from '@/src/components/Result'
import {MainLayout} from "@/src/layouts/MainLayout";
export default function SuccessPage(props) {
    return (
        <>
            <Head title={'О нас'}/>
            <MainLayout disableCategories={true}>
               <div style={{display: 'flex', justifyContent:'center', alignContent: 'center', alignItems: 'center'}}>
                  <div>
                      <div>
                          ИП Бештоев Мовсар Магомедович
                      </div>
                      <div>
                          ИНН: 060808423929
                      </div>

                      <div>
                          ОГРНИП: 323060000010250
                      </div>
                  </div>
               </div>
            </MainLayout>
        </>
    );
}
