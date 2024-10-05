export const PackagesData = (state) => state?.package?.packages?.data?.plan;

export const PackagesLoading = (state) => state?.package?.packages?.isLoading;

export const MediaLoading = (state) => state?.media?.media?.isLoading;

export const PackagesSuccess = (state) => state?.package?.packages?.isSuccess;

export const PackagesError = (state) => state?.package?.packages?.errorMessage;

export const SelectedPackage = (state) =>
  state?.package?.selectedPackage?.data?.plan;

export const ContactsData = (state) => state?.contact?.contacts?.data?.contacts;

export const CurrentContactsData = (state) =>
  state?.contact?.selectedContact?.data?.contacts;

export const ContactLoading = (state) => state?.contact?.contacts?.isLoading;

export const BlogsData = (state) => state?.blog?.blogs?.data?.blog;
export const CurrentBlogData = (state) => state?.blog?.selectedBlog?.data?.blog;

export const CurrentBlogLoading = (state) =>
  state?.blog?.selectedBlog?.isLoading;

export const BlogLoading = (state) => state?.blog?.blogs?.isLoading;
