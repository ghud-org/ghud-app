type PersonType = {
  id: string;
  name: string;
};

type PeopleType = PersonType[];

type InteractionType = {
  id: string;
  description: string;
  units: number;
  hours: number;
  people?: PeopleType;
};

type ValidatedFlagType = {
  validated: boolean;
};

type ValidatedInteractionType = InteractionType & ValidatedFlagType;

type InteractionsType = InteractionType[];

type ValidateInteractionConfig = {
  interaction: InteractionType;
};

const isMissingProperty =
  (property: string | number) =>
  (interaction: InteractionType): boolean => {
    if (!interaction.hasOwnProperty(property)) return true;
    return false;
  };

const isMissingId = isMissingProperty("id");
const isMissingDescription = isMissingProperty("description");
const isMissingUnits = isMissingProperty("units");
const isMissingHours = isMissingProperty("hours");

export const validateInteraction = (
  config: ValidateInteractionConfig
): ValidatedInteractionType => {
  const { interaction } = config;
  if (
    isMissingId(interaction) ||
    isMissingDescription(interaction) ||
    isMissingUnits(interaction) ||
    isMissingHours(interaction)
  )
    return { ...interaction, validated: false };
  return { ...interaction, validated: true };
};
