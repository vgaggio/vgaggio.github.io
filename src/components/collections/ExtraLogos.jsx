import logoSA from "../../images/logos/sanatorioallende.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const ExtraLogos = () => {
  const { t } = useTranslation();
  const logos = [
    { _id: 2001, title: "Sanatorio Allende", logo: logoSA},
  ];
  return (
    <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
      <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
        {t('heroTrustedCol')}
      </p>
      <ul
        role="list"
        className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
      >
        {logos.map(({ title, logo }) => (
          <li key={title}>
            <Image src={logo} alt={title} className="h-8" unoptimized />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExtraLogos;
