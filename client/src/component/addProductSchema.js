import * as yup from 'yup'

export const productSchema =yup.object({
        Standard:yup.number(),
        Small: yup.number(),
        Medium: yup.number(),
        Large:yup.number(),
        ExtraLarge: yup.number(),
        Code:yup.number().required(),
        Name:yup.string().required(),
        Catagory:yup.string(),
        Price:yup.number().required(),
        42: yup.number(),
        40:yup.number(),
        38:yup.number(),
        36:yup.number(),
        34:yup.number(),
        32:yup.number(),
        30:yup.number(),
        28:yup.number(),
        26:yup.number(),
        24:yup.number(),
        22:yup.number(),
        20:yup.number(),
        18:yup.number(),
        16:yup.number()
          
})