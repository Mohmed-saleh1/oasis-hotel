import { useMemo } from "react";
import { hotels, type Hotel } from "@/data/hotels";
import { useI18n, type Language } from "@/i18n/context";
import { hotelContentEn, type HotelContentTranslations } from "@/i18n/hotelContent/en";
import { hotelContentIt } from "@/i18n/hotelContent/it";
import { hotelContentFr } from "@/i18n/hotelContent/fr";
import { hotelContentPl } from "@/i18n/hotelContent/pl";

const contentMap: Record<Language, HotelContentTranslations> = {
  en: hotelContentEn,
  it: hotelContentIt,
  fr: hotelContentFr,
  pl: hotelContentPl,
};

/** Returns the full hotels array with description, fullDescription, features and rooms overlaid in the active language. */
export const useTranslatedHotels = (): Hotel[] => {
  const { lang } = useI18n();
  return useMemo(() => {
    const content = contentMap[lang];
    return hotels.map((hotel) => {
      const t = content[hotel.id as keyof HotelContentTranslations];
      if (!t) return hotel;
      return {
        ...hotel,
        description: t.description,
        fullDescription: t.fullDescription,
        features: t.features,
        rooms: hotel.rooms.map((room, i) => ({
          ...room,
          name: t.rooms[i]?.name ?? room.name,
          description: t.rooms[i]?.description ?? room.description,
        })),
      };
    });
  }, [lang]);
};

/** Returns a single translated hotel by id. */
export const useTranslatedHotel = (hotelId: string | undefined): Hotel | undefined => {
  const translatedHotels = useTranslatedHotels();
  return useMemo(
    () => translatedHotels.find((h) => h.id === hotelId),
    [translatedHotels, hotelId]
  );
};
