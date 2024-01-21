import AppLayout from '@/Layouts/AppLayout';
import { Head, usePage } from '@inertiajs/react';
import Container from '@/Components/Container';
import { useState } from 'react';
import Details from '@/Pages/Transactions/Partials/Details';
import TransactionBlock from '@/Pages/Transactions/Partials/TransactionBlock';
import Pagination from '@/Components/Pagination';

export default function Show() {
    const { data: transactions, meta, links } = usePage().props.transactions;
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState(null);

    return (
        <>
            <Head title="Customer Orders" />
            <Container>
                {details !== null && (
                    <Details open={open} setOpen={setOpen} details={details} />
                )}
                <div className="py-8 lg:py-16">
                    <div className="grid grid-cols-4 gap-4">
                        {transactions.map((transaction) => (
                            <TransactionBlock
                                {...{
                                    transaction,
                                    setOpen,
                                    setDetails,
                                }}
                            />
                        ))}
                    </div>
                    {meta.has_pages && <Pagination links={links} />}
                </div>
            </Container>
        </>
    );
}

Show.layout = (page) => (
    <AppLayout
        header={
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                Customer Orders
            </h1>
        }
        children={page}
    />
);
