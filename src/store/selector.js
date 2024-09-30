export const PackagesData = (state) => state?.package?.packages?.packages?.plan;

export const PackagesLoading = (state) => state?.package?.packages?.isLoading;

export const MediaLoading = (state) => state?.media?.media?.isLoading;

export const PackagesSuccess = (state) => state?.package?.packages?.isSuccess;

export const PackagesError = (state) => state?.package?.packages?.errorMessage;

export const SelectedPackage = (state) =>
  state?.package?.selectedPackage?.data?.plan;
