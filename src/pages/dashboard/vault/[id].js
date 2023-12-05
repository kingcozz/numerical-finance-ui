// next
import Head from 'next/head';
// layouts
import DashboardLayout from '../../../layouts/dashboard';
// sections
import { Vault } from '../../../sections/@dashboard/vault';

// ----------------------------------------------------------------------

VaultPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function VaultPage() {
  return (
    <>
      <Head>
        <title> Vault | Numerical Finance</title>
      </Head>

      <Vault />
    </>
  );
}
