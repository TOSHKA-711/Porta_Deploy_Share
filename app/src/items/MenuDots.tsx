import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaUsers } from "react-icons/fa";
import { MdDeleteOutline, MdStarRate } from "react-icons/md";
import { FcCancel } from "react-icons/fc";
import { ToastContainer } from "react-toastify";
import { githubRepoType, ProjectType } from "@/Redux/Types";
import { useDeleteRepoMutation } from "@/Redux/slices/github/githubApi";
import { useAlert } from "./hooks/useAlert";
import { useConfirm } from "./hooks/useConfirm";
import {
  useDeployGithubRepoMutation,
  useImportGithubRepoMutation,
} from "@/Redux/slices/vercel/vercelApi";
import { useAddProjectMutation } from "@/Redux/slices/Project/projectApi";

export default function MenuDots({
  repo,
  refetch,
  liveLink,
  isDeployed,
}: {
  repo: githubRepoType;
  liveLink: string | null;
  refetch: () => void;
  isDeployed: boolean;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { confirm } = useConfirm();

  const [deleteRepo] = useDeleteRepoMutation();
  const [importGithubRepo] = useImportGithubRepoMutation();
  const [deployGithubRepo] = useDeployGithubRepoMutation();
  const [addProject] = useAddProjectMutation();
  const { showError, showSuccess } = useAlert();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(repo);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteRepo = async ({
    owner,
    repoName,
  }: {
    owner: string;
    repoName: string;
  }) => {
    handleClose();
    const ok = await confirm({
      title: "Delete Project?",
      text: `Are you sure you want to delete the project "${repoName}"?`,
      icon: "warning",
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
    });

    if (!ok) return; // Cancel ⇒ stop

    try {
      await deleteRepo({ owner, repoName }).unwrap();
      showSuccess(`${repoName} deleted successfully`);
      refetch();
    } catch (error) {
      console.log("Failed to delete repo", error);
      showError(`Failed to delete ${repoName}`);
    }
  };

  const handleDeployRepo = async ({
    name,
    owner,
    repoName,
    branch,
    repoId,
  }: {
    name: string;
    owner: string;
    repoName: string;
    branch: string;
    repoId: number;
  }) => {
    handleClose();
    const ok = await confirm({
      title: "Deploy Project?",
      text: `Are you sure you want to deploy the project "${repoName} on Vercel"?`,
      icon: "question",
      confirmButtonText: "Yes, Deploy",
      cancelButtonText: "Cancel",
    });

    if (!ok) return; //  Cancel ⇒ stop

    try {
      await importGithubRepo({ name, repoId }).unwrap();
      await deployGithubRepo({
        name: repoName,
        owner,
        repoName,
        repoId,
        branch,
      }).unwrap();
      showSuccess(`${repoName} will be Deploy successfully within 1-2 minutes`);
      refetch();
    } catch (error) {
      console.log("Failed to Deploy repo", error);
      showError(`Failed to Deploy ${repoName}`);
    }
  };

  const handleAddProject = async ({ data }: { data: ProjectType }) => {
    handleClose();
    const ok = await confirm({
      title: "Add Project?",
      text: `Are you sure you want to add the project "${name} to Portfolio"?`,
      icon: "question",
      confirmButtonText: "Yes, Add",
      cancelButtonText: "Cancel",
    });

    if (!ok) return; //  Cancel ⇒ stop

    try {
      await addProject({
        name: data.name,
        description: data.description,
        githubUrl: data.githubUrl,
        vercelUrl: data.vercelUrl,
        image: data.image,
        isDeployed: data.isDeployed,
        isFeatured: data.isFeatured,
        isProfiled: data.isProfiled,
        isComplete: data.isComplete,
      });
      showSuccess(`${name} will be Deploy successfully within 1-2 minutes`);
      refetch();
    } catch (error) {
      console.log("Failed to Deploy repo", error);
      showError(`Failed to Deploy ${name}`);
    }
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          fontSize: "25px",
          fontWeight: "bold",
          marginBottom: "14px",
          minWidth: "auto",
        }}
      >
        ...
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiMenuItem-root": {
            justifyContent: "space-between",
            padding: "10px 2rem 10px 15px",
            fontFamily: "unset",
            fontSize: "16px",
          },
        }}
      >
        {isDeployed ? (
          <MenuItem
            onClick={() =>
              handleDeployRepo({
                name: repo.name,
                repoName: repo.name,
                owner: repo.owner?.login,
                branch: repo.default_branch,
                repoId: repo.id,
              })
            }
          >
            cancel Deploy <FcCancel />
          </MenuItem>
        ) : (
          <MenuItem
            onClick={() =>
              handleDeployRepo({
                name: repo.name,
                repoName: repo.name,
                owner: repo.owner?.login,
                branch: repo.default_branch,
                repoId: repo.id,
              })
            }
          >
            Deploy <FaUsers />
          </MenuItem>
        )}
        <MenuItem
          onClick={() =>
            handleAddProject({
              data: {
                name: repo.name,
                description: repo.description ?? "",
                githubUrl: repo.html_url,
                vercelUrl: liveLink ?? "",
                image: coverImage ?? "",
                isDeployed: Boolean(liveLink),
                isFeatured: false,
                isProfiled: false,
                isComplete: false,
              },
            })
          }
        >
          add to portfolio <MdStarRate />
        </MenuItem>
        <MenuItem
          onClick={() =>
            handleDeleteRepo({ owner: repo.owner?.login, repoName: repo.name })
          }
          sx={{
            color: "red",
            justifyContent: "space-between",
            fontSize: "18px",
          }}
        >
          Delete Repo <MdDeleteOutline />
        </MenuItem>
      </Menu>

      <ToastContainer />
    </div>
  );
}
