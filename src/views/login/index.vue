<script setup lang="ts">
import type { Form } from "@varlet/ui";
import { reactive, ref } from "vue";
import request from "@/utils/request";

const formData = reactive({
  username: "",
  password: "",
});

const formRef = ref<InstanceType<typeof Form> | null>(null);

async function login(): Promise<void> {
  await request.post(
    "login",
    JSON.stringify({
      username: formData.username,
      password: formData.password,
    })
  );
}
</script>

<template>
  <VarAppBar title="登录" />
  <div class="container">
    <VarForm ref="formRef" class="form">
      <VarSpace direction="column" size="large">
        <VarInput
          v-model="formData.username"
          placeholder="请输入用户名"
          :rules="[(v) => !!v || '用户名不能为空']"
        />
        <VarInput
          v-model="formData.password"
          type="password"
          placeholder="请输入密码"
          :rules="[(v) => !!v || '密码不能为空']"
        />
        <VarButton type="primary" @click="login">登录</VarButton>
      </VarSpace>
    </VarForm>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex: 1;
  padding: 2vw;
}

.form {
  width: 100%;
}
</style>
