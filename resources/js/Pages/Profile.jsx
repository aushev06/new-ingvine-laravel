import {Head} from "@inertiajs/inertia-react";
import {MainLayout} from "@/src/layouts/MainLayout";

export default function Profile(props) {
    return (
        <>
            <Head title={'Мой профиль'}/>
            <MainLayout disableCategories={true}>
                <div>
                    213
                </div>
            </MainLayout>
        </>
    )
}
