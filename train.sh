CUDA_VISIBLE_DEVICES=1  mmf_run config=projects/m4c/configs/textvqa/ocr_cascade.yaml \
    datasets=textvqa \
    model=m4c \
    run_type=train_val\
    env.save_dir=./save/m4ctextvqa \
    training.max_updates=48000\
    training.num_workers=2\
    training.seed=3\
    evaluation.predict=False \
    training.batch_size=48\
    training.lr_steps=[24000,38000]\
    # checkpoint.resume=True \
    # checkpoint.resume_best=True

