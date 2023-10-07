import z from 'zod';

const trustedSiteSchema = z.object({
    domain: z.string(),
    suggestedDomain: z.string(),
    status: z.boolean(),
});

type TrustedSite = z.infer<typeof trustedSiteSchema>;

const PopupResult = ({ domain, suggestedDomain, status }: TrustedSite) => {
    return (
        <table className="min-w-full divide-y-4 divide-gray-200 bg-white sm:text-md text-sm">
            <thead className="text-left">
                <tr>
                    <th className="whitespace-nowrap sm:px-4 py-2 font-medium text-black">
                        Search for
                    </th>
                    <th className="whitespace-nowrap sm:px-4 py-2 font-medium text-black">
                        Suggested URL
                    </th>
                    <th className="whitespace-nowrap sm:px-4 py-2 font-medium text-black">
                        Status
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y-2 divide-gray-200">
                <tr className="">
                    <td className="whitespace-pre-wrap sm:px-4 py-2 font-medium text-gray-900 overflow-x-hidden">
                        {domain}
                    </td>
                    <td className="whitespace-pre-wrap sm:px-4 py-2 font-medium text-gray-900 overflow-x-hidden">
                        {suggestedDomain}
                    </td>
                    <td className="whitespace-nowrap sm:px-4 py-2 text-gray-700">
                        {status ? "blocked" : "-"}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default PopupResult