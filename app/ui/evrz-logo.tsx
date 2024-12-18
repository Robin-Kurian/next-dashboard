import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

export default function EvrzLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <BuildingStorefrontIcon className="h-12 w-12 rotate-[15deg]s mr-2 mb-2" />
      <p className="text-[44px]">Evrz</p>
    </div>
  );
}
