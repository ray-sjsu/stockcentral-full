import SearchPageContent from '@/components/search/SearchPageContent';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';


const SearchPage = async () => {
    const session = await getServerSession(authOptions);
    return (
        <>
            <SearchPageContent />
            {
                session?.user ? <section>You are logged in. Here are your recent searches</section> : null
            }
        </>
    )
}

export default SearchPage