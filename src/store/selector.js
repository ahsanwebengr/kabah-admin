export const PackagesData = (state) => state?.package?.packages?.plan;

export const PackagesLoading = (state) => state?.package?.isLoading;

export const PackagesSuccess = (state) => state?.package?.isSuccess;

export const PackagesError = (state) => state?.package?.errorMessage;
