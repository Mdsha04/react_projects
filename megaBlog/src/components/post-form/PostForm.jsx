import React, { useCallback } from 'react'
import { useForm } from "react-hook-form"
import { Input, Button, Rte, Select } from "../index"
import databaseservice from '../../appwrite/database'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'


const PostForm = ({ post }) => {

    const navigate = useNavigate()
    const { register, handleSubmit, control, setValue, getValues, watch } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    })
    const userData = useSelector((state) => state.auth.userData)

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ?
                await databaseservice.uploadFiles(data.image[0])
                : null;
            if (file) {
                databaseservice.deleteFiles(post.featuredimage)
            }
            const dbPost = await databaseservice.updatePost
                (post.$id, {
                    ...data,
                    featuredimage: file ? file.$id : undefined
                })
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
        } else {
            const file = await databaseservice.uploadFiles(data.image[0]);

            if (file) {
                const fileId = file.$id
                data.featuredimage = fileId
                const dbPost = await databaseservice.createPost(
                    {
                        ...data, userid: userData.$id
                    });
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);


                }
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return ""

    }, [])

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);





    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <Rte label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={databaseservice.previewFiles(post.featuredimage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm
