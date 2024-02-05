/* eslint-disable import/no-extraneous-dependencies */
import useSWRMutation from "swr/mutation";

import mutationFetcher from "@/utils/mutationFetcher";

export const SendMatchedEntrepreneurEmail = () => {
  const { trigger } = useSWRMutation(
    `/api/email/entrepreneur/matched`,
    mutationFetcher
  );
  return {
    sendEntrepreneurEmail: trigger,
  };
};
